import { NgModule } from '@angular/core'
import { ProductRepository } from './product.repository'
import { StaticDataSource } from './static.datasource'

// make its classes/services available to other modules
@NgModule({
  providers: [ProductRepository, StaticDataSource],
})
export class ModelModule {}
