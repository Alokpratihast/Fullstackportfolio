import { Routes } from '@angular/router';

import { SkillList } from './pages/skill-list/skill-list';
import { AddSkill } from './pages/add-skill/add-skill';
import { EditSkill } from './pages/edit-skill/edit-skill';

export const SKILLS_ROUTES: Routes = [

  {
    path: '',
    component: SkillList
  },

  {
    path: 'add',
    component: AddSkill
  },

  {
    path: 'edit/:id',
    component: EditSkill
  }

];