import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { ShoppingItemsServices } from '../services/shoppingItemsServices';

const Tab1: React.FC<ShoppingItemsServices> = ( {items, isEmpty}) => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi lista de la compra</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mi lista de la compra</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
