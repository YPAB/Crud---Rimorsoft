<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
    	$products = Product::orderBy('id','DESC')->paginate();
    	return view ('products.index',compact('products'));
    }

public function create()
{

	return view ('products.create');
}

public function store(ProductRequest $request)
{
	$product = new Product;

	$product->name = $request->name;
	$product->short = $request->short;
	$product->body = $request->body;

	$product->save();

    return redirect()->route('products.index')

	                  ->with('info','Producto fue Almacenado con exito');
}


public function edit($id)
{
//funcion buscar
	$product = Product::find($id);
	return view ('products.edit', compact('product'));

}

public function update(ProductRequest $request, $id)
{
	$product = Product::find($id);

	$product->name = $request->name;
	$product->short = $request->short;
	$product->body = $request->body;

	$product->save();

    return redirect()->route('products.index')

	                  ->with('info','Producto Actualizado con exito');
}




public function show($id)
{
	//funcion buscar
	$product = Product::find($id);
	return view ('products.show', compact('product'));
}

public function destroy ($id)
{
	$product= Product::find($id);
	$product->delete();
	return back()->with('info','El Producto fue eliminado');
}


}

