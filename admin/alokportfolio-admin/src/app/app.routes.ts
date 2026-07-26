import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/pages/login/login';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'projects',
        loadChildren: () =>
          import('./features/projects/projects.routes')
            .then(m => m.PROJECTS_ROUTES)
      },

      {
  path: 'skills',
  loadChildren: () =>
    import('./features/skills/skills.routes')
      .then(m => m.SKILLS_ROUTES)
},{
  path: 'experience',
  loadChildren: () =>
    import('./features/experience/experience.routes')
      .then(m => m.EXPERIENCE_ROUTES)
},{
  path: 'education',
  loadChildren: () =>
    import('./features/education/education.routes')
      .then(m => m.EDUCATION_ROUTES)
},{
  path:'certificates',
  loadChildren:()=>
  import('./features/certificates/certificates.routes')
  .then(m=>m.CERTIFICATE_ROUTES)
}

    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  },

  

];