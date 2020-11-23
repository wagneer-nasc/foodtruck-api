import Store from '../models/Store';
import imagesView from '../views/images.view';

export default {
    render(store: Store) {
        return {
            id: store.id,
            name: store.name,
            address: store.address,
            description: store.description,
            is_delivery: store.is_delivery,
            opening_days: store.opening_days,
            opening_hours: store.opening_hours,
            contact: store.contact,
            images: imagesView.renderMany(store.images),

        }
    },
    renderMany(stores: Store[]) {
        return stores.map(store => this.render(store));
    },

 
}