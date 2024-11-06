import { Routes } from '@angular/router';
import { ArrayPrototypesComponent } from './array-prototypes/array-prototypes.component';
import { AppComponent } from './app.component';
import { MatrixTraversalComponent } from './matrix-traversal/matrix-traversal.component';
import { TimedCacheComponent } from './timed-cache/timed-cache.component';
import { MergeArraysComponent } from './merge-arrays/merge-arrays.component';

export const routes: Routes = [
    {  path: '', component: ArrayPrototypesComponent },
    {  path: 'ArrayPrototypes', component: ArrayPrototypesComponent },
    {  path: 'Matrix', component: MatrixTraversalComponent },
    {  path: 'Timed_Cache', component: TimedCacheComponent },
    {  path: 'Merge_Arrays', component: MergeArraysComponent },


    
];
