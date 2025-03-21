<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductListResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function home(): Response
    {
        $products = Product::query()
            ->forWebsite()
            ->paginate(12);

        return Inertia::render('Home', [
            'products' => ProductListResource::collection($products)
        ]);
    }

    public function Show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'product' => new ProductResource($product),
            'variationOptions' => request('options', [])
        ]);
    }
}
