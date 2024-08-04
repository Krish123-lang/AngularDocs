import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';

export const routes: Routes = [
    { path: 'first', title: 'first', component: FirstComponent },
    { path: 'second', title: 'second', component: SecondComponent },
    { path: 'third', title: 'third', component: ThirdComponent },
    { path: 'fourth', title: 'fourth', component: FourthComponent },
    { path: 'fifth', title: 'fifth', component: FifthComponent },
    { path: 'sixth', title: 'sixth', component: SixthComponent },
];
