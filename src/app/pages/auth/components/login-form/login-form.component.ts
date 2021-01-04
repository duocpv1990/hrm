import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../../../shared/services/loader.service';
import { NotificationService } from '../../../../shared/services/toastr.service';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    @Output() sendLoginForm = new EventEmitter<void>();
    loginForm: FormGroup;
    flatlogicEmail: string;
    flatlogicPassword: string;
    passwordType = "password";
    passwordIcon = "visibility_off";
    @HostListener('window:keydown.enter', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        this.login();
    }

    constructor(
        private loginService: LoginService,
        private notificationService: NotificationService,
        private fb: FormBuilder,
        private router: Router,
        private loaderService: LoaderService
    ) {
        this.loginForm = this.fb.group({
            grant_type: ["password"],
            username: ["", Validators.required],
            password: ["", Validators.required],
        });

    }

    ngOnInit() { }

    hideShowPassword() {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "visibility_off" ? "visibility" : "visibility_off";
    }

    login() {
        localStorage.clear();
        this.loaderService.startLoading();
        this.loginService.login(this.loginForm.value).subscribe(
            (res) => {
                this.loaderService.stopLoading();
                localStorage.setItem('access_token', JSON.stringify(res));
                localStorage.setItem('token', res.access_token);
                this.router.navigateByUrl('/home');
            },
            (err) => {
                this.loaderService.stopLoading();
                this.notificationService.showError('Đăng nhập thất bại!', err.message);
            }
        );
    }
}
