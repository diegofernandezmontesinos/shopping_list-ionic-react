import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonCheckbox,
  IonIcon,
} from "@ionic/react";
import './Tab2.css';
import { addCircleOutline } from "ionicons/icons";

const ShoppingList: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<Array<{ id: number; title: string; isChecked: boolean }>>([]);

  const addItem = () => {
    if (value) {
      const newItem = {
        id: Date.now(),
        title: value,
        isChecked: false,
      };
      setList([...list, newItem]);
      setValue("");
    }
  };

  const checkItem = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="input-container">
          <IonInput
            type="text"
            placeholder="Item:"
            value={value}
            onIonChange={(e) => setValue(e.detail.value!)}
          />
          <IonButton onClick={addItem}><IonIcon icon={addCircleOutline}></IonIcon></IonButton>
        </div>

        <IonList>
          {list.map((item) => (
            <IonItem key={item.id}>
              <span
                style={{
                  textDecoration: item.isChecked ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: '5px' }}>
                <IonCheckbox
                  checked={item.isChecked}
                  onIonChange={() => checkItem(item.id)}
                />
                <IonButton color="danger" onClick={() => deleteItem(item.id)}>
                  Delete
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShoppingList;
