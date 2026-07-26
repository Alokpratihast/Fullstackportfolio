import { Routes } from '@angular/router';

import { ProjectListComponent } from './pages/project-list/project-list';
import { AddProjectComponent } from './pages/add-project/add-project';
import { EditProjectComponent } from './pages/edit-project/edit-project';



export const PROJECTS_ROUTES: Routes = [

  {
    path: '',
    component: ProjectListComponent
  },

  {
    path: 'add',
    component: AddProjectComponent
  },

  {
    path: 'edit/:id',
    component: EditProjectComponent
  }

];