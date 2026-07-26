import { Routes } from '@angular/router';

import { CertificateList } from './pages/certificate-list/certificate-list';
import { AddCertificate} from './pages/add-certificate/add-certificate';
import { EditCertificate} from './pages/edit-certificate/edit-certificate';

export const CERTIFICATE_ROUTES:Routes=[

{

path:'',
component:CertificateList

},

{

path:'add',
component:AddCertificate

},

{

path:'edit/:id',
component:EditCertificate

}

];