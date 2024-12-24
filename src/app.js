// Data Base Product
document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name:'Ziba Chair', img:'img/1.jpg', price:101010, stars: 5},
            {id: 2, name:'Quad-Space Stool', img:'img/2.jpg', price:500000, stars: 5},
            {id: 3, name:'Solid Pendant', img:'img/3.jpg', price:150000,stars: 5},
            {id: 4, name:'Soft Table Light', img:'img/4.jpg', price:700000, stars: 5},
            {id: 5, name:'Core Pendant', img:'img/5.jpg', price:100000, stars: 5},
            {id: 6, name:'Dulwich Extending Table', img:'img/6.jpg', price:400000, stars: 5},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find(item => item.id === newItem.id);

            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.total += newItem.price;
                this.quantity++;
            } else {
                cartItem.quantity++;
                cartItem.total += newItem.price;
                this.total += newItem.price;
                this.quantity++;
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);
        
            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id === id) {
                        item.quantity--;
                        item.total -= item.price; // Kurangi harga item
                    }
                    return item;
                });
                this.quantity--; 
                this.total -= cartItem.price;
            } else {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }        
    });
    
});


// Konversi ke Rupiah 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style : 'currency',
        currency : 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};



