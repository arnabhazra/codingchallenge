import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BugComponent } from './bug/bug.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EpicComponent } from './epic/epic.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GoalComponent } from './goal/goal.component';

const appRoutes: Routes = [
  { path: 'backlog', component: BacklogComponent },
  { path: 'bug', component: BugComponent },
  { path: 'epic', component: EpicComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'goal', component: GoalComponent }
  //{ path: '**', component: PagenotfoundcomponentComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    BacklogComponent,
    BugComponent,
    NavbarComponent,
    EpicComponent,
    FeedbackComponent,
    GoalComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

