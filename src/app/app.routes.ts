import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Inicio } from './inicio/inicio';
import { DecanatoTeologia } from './decanato-teologia/decanato-teologia';
import { DecanatoHumanidades } from './decanato-humanidades/decanato-humanidades';
import { DecanatoJurisprudencia } from './decanato-jurisprudencia/decanato-jurisprudencia';
import { DecanatoEconomicas } from './decanato-economicas/decanato-economicas';
import { LoginGuardian } from './login/login-guardian';


export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'inicio', component: Inicio},
    { path: 'Facultad de Teologia', component: DecanatoTeologia, canActivate: [LoginGuardian] },
    { path: 'Facultad de Ciencias Economicas', component: DecanatoEconomicas, canActivate: [LoginGuardian] },
    { path: 'Facultad de Humanidades', component: DecanatoHumanidades, canActivate: [LoginGuardian] },
    { path: 'Facultad de Jurisprudencia', component: DecanatoJurisprudencia, canActivate: [LoginGuardian] },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }
];