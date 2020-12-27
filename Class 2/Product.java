class Product {
    private String name;
    private int quantity;
    private float price;
    private String marca;

    public Product() {}

    public Product(String name, int quantity, float price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQuantity(int quantity) {
        if(quantity >= 0) {
            this.quantity = quantity;
        }
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getName() {
        return this.name;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public float getPrice() {
        return this.price;
    }

    public String getMarca() {
        return this.marca;
    }

    public void addQuantity(int quantity) {
        this.quantity += quantity;
    }

    public void removeQuantity(int quantity) {
        this.quantity -= quantity;
    }
}