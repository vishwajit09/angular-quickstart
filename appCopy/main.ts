import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);