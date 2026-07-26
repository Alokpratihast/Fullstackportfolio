import { Routes } from '@angular/router';

import { ExperienceList } from './pages/experience-list/experience-list';
import { AddExperience} from './pages/add-experience/add-experience';
import { EditExperience } from './pages/edit-experience/edit-experience';

export const EXPERIENCE_ROUTES: Routes = [

  {
    path: '',
    component: ExperienceList
  },

  {
    path: 'add',
    component: AddExperience
  },

  {
    path: 'edit/:id',
    component: EditExperience
  }

];