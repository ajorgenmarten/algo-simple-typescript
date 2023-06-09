type NodoProps = {
    hijoDerecho?: Nodo,
    hijoIzquierdo?: Nodo,
    valor: Number, 
}

class Nodo {
    hijoDerecho?: Nodo
    hijoIzquierdo?: Nodo
    valor: Number

    constructor(props: NodoProps) {
        this.hijoDerecho = props.hijoDerecho
        this.hijoIzquierdo = props.hijoIzquierdo
        this.valor = props.valor 
    }

    agregar(nodo: Nodo) {
        if(nodo.valor < this.valor) {
            if( !this.hijoIzquierdo ) { this.hijoIzquierdo = nodo; return }
            this.hijoIzquierdo.agregar(nodo) 
            return 
        }
        if(!this.hijoDerecho) { this.hijoDerecho = nodo; return }
        this.hijoDerecho.agregar(nodo);
    }

    preOrden(values: Number[]):Number[] {
        values.push(this.valor)
        
        if(this.hijoIzquierdo) values = this.hijoIzquierdo.preOrden(values)
        
        if(this.hijoDerecho) values = this.hijoDerecho.preOrden(values)

        return values;
    }

    inOrden(values: Number[]):Number[] {
        if(this.hijoIzquierdo) values = this.hijoIzquierdo.inOrden(values)
        
        values.push(this.valor)
        
        if(this.hijoDerecho) values = this.hijoDerecho.inOrden(values)

        return values;
    }

    postOrden(values: Number[]):Number[] {
        if(this.hijoIzquierdo) values = this.hijoIzquierdo.postOrden(values)
        
        if(this.hijoDerecho) values = this.hijoDerecho.postOrden(values)
        
        values.push(this.valor)
        
        return values;
    }

    esHoja = ():boolean => !this.hijoIzquierdo && !this.hijoDerecho
}

class Arbol {
    cabeza?: Nodo

    constructor(valores?: Number[]) {
        if(valores) 
            for(let valor of valores) this.agregar(valor)
        
    }

    agregar(valor: Number) {
        let nodo = new Nodo({valor})

        if(!this.cabeza) { this.cabeza = nodo; return }
        this.cabeza.agregar(nodo);
    }

    inOrden(): Number[] {
        let valores:Number[] = []

        if(!this.cabeza) return valores

        return this.cabeza.inOrden(valores)
    }

    preOrden(): Number[] {
        let valores:Number[] = []

        if(!this.cabeza) return valores

        return this.cabeza.preOrden(valores)
    }

    postOrden(): Number[] {
        let valores:Number[] = []

        if(!this.cabeza) return valores

        return this.cabeza.postOrden(valores)
    }
}

export default Arbol