import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { ModesComponent } from './MyComponents/modes/modes.component';
import { CaisseComponent } from './components/caisse/list-caisse/caisse.component';
import { AddModeComponent } from './components/Mode_Paiement/add-mode/add-mode.component';
import { ModeComponent } from './components/Mode_Paiement/list-mode/mode.component';
import { UpdateModeComponent } from './components/Mode_Paiement/update-mode/update-mode.component';
import { AddCaisseComponent } from './components/caisse/add-caisse/add-caisse.component';
import { UpdateCaisseComponent } from './components/caisse/update-caisse/update-caisse.component';
import { AffectModeComponent } from './components/caisse/affect-mode/affect-mode.component';
import { ListCaissierComponent } from './components/caissier/list-caissier/list-caissier.component';
import { ListAgentComponent } from './components/agent/list-agent/list-agent.component';
import { AddCaissierComponent } from './components/caissier/add-caissier/add-caissier.component';
import { UpdateCaissierComponent } from './components/caissier/update-caissier/update-caissier.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { UpdateAgentComponent } from './components/agent/update-agent/update-agent.component';
import { ConsulterAgentComponent } from './components/agent/consulter-agent/consulter-agent.component';
import { ConsulterCaissierComponent } from './components/caissier/consulter-caissier/consulter-caissier.component';
import { ConsulterCaisseComponent } from './components/caisse/consulter-caisse/consulter-caisse.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: AcceuilComponent},
                    {path: 'ModePaiement', component: ModeComponent},
                    {path: 'add-mode', component: AddModeComponent},
                    {path: 'Update-Mode/:id', component: UpdateModeComponent},
                    {path: 'Caisse', component: CaisseComponent},
                    {path: 'add-caisse', component: AddCaisseComponent},
                    {path: 'Update-Caisse/:id', component: UpdateCaisseComponent},
                    {path: 'Consulter-Caisse/:idC', component: ConsulterCaisseComponent},
                    {path: 'affect-mode/:id', component: AffectModeComponent},
                    {path: 'Caissier', component: ListCaissierComponent},
                    {path: 'add-caissier', component: AddCaissierComponent},
                    {path: 'consulter-caissier/:matricule', component: ConsulterCaissierComponent},
                    {path: 'Update-caissier/:matricule', component: UpdateCaissierComponent},
                    {path: 'Agent', component: ListAgentComponent},
                    {path: 'add-agent', component: AddAgentComponent},
                    {path: 'consulter-agent/:matricule', component: ConsulterAgentComponent},
                    {path: 'Update-agent/:matricule', component: UpdateAgentComponent},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path:'test/modes', component: ModesComponent},
                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'pages/login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
