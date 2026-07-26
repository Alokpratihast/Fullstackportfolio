import { Routes } from '@angular/router';

import { EducationList } from './pages/education-list/education-list';
import { AddEducation } from './pages/add-education/add-education';
import { EditEducation} from './pages/edit-education/edit-education';

export const EDUCATION_ROUTES: Routes = [

  {
    path: '',
    component: EducationList
  },

  {
    path: 'add',
    component: AddEducation
  },

  {
    path: 'edit/:id',
    component: EditEducation
  }

];