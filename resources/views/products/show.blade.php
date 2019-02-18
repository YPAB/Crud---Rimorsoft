@extends ('layout')

@section ('content')
<div class="col-sm-8">
	<h2>
		{{ $product->name }}
		<a href="{{ route('products.edit', $product->id) }}" class="btn btn-primary float-right">Editar</a>
	</h2>
	<p>
		{{ $product->short }}
	</p>
<!- ese codigo se va a interpretrar, no se va a escribir en pantalla de forma literal->
{!! $product->body !!}
</div>

<div class="col-sm-4">

	@include('products.fragment.aside')
</div>

@endsection