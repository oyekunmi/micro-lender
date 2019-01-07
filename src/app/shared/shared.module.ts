import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
// import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { ContextService } from './context.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    // FavoriteButtonComponent,
    // FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    // FavoriteButtonComponent,
    // FollowButtonComponent,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ],
  providers: [
    ContextService
  ]
})
export class SharedModule {}
