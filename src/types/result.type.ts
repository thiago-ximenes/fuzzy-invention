type Shipping = {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: null;
    promise: null;
}

type Seller = {
    id: number;
    nickname: string;
}

type AttributeValue = {
    id: string | null;
    name: string;
    struct: null;
    source: number;
}

type Attribute = {
    id: string;
    name: string;
    value_id: string | null;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: null;
    values: AttributeValue[];
    source: number;
    value_type: string;
}

type Installments = {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

type DifferentialPricing = {
    id: number;
}

type Result = {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: null;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: number;
    sale_price: null;
    available_quantity: number;
    official_store_id: null;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    shipping: Shipping;
    stop_time: string;
    seller: Seller;
    attributes: Attribute[];
    installments: Installments;
    winner_item_id: null;
    catalog_listing: boolean;
    discounts: null;
    promotions: any[];
    differential_pricing: DifferentialPricing;
    inventory_id: string;
}

export default Result;