export interface ShoppingItemsServices{
    items : string[],
    isEmpty: boolean,
}

const ShoppingItem : ShoppingItemsServices = {
    items: [],
    isEmpty: true,
}


export const addItem = (item: string, isEmpty: boolean) => {
    ShoppingItem.items.push(item); 
} 

export const removeItem = ( item: string) => {
    let index = ShoppingItem.items.findIndex(it => it.toUpperCase().trim() === item.toLocaleLowerCase().trim());
    if(index != -1){
        ShoppingItem.items.splice(index, 1);
        if(ShoppingItem.items.length == 0){
            ShoppingItem.isEmpty = true;
        }
    }
}

export const removeAllItems = () => {
    ShoppingItem.items = [];
    ShoppingItem.isEmpty = true;
}

export const existsItem = (item : string) => {
    const itemFound = ShoppingItem.items.find(it => it.toUpperCase().trim() === item.toLocaleLowerCase().trim());
    return itemFound;
}

