import category from 'app/entities/category/category.reducer';
import product from 'app/entities/product/product.reducer';
import customer from 'app/entities/customer/customer.reducer';
import address from 'app/entities/address/address.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  category,
  product,
  customer,
  address,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
