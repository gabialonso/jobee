class notePorcentaje {
    constructor() {
        this.note = [];
    }
    agregarNota(valor, peso = 1) {
        if (typeof valor !== 'number' || Number.isNaN(valor)) {
            throw new TypeError('La nota debe ser un número.');
        }
        if (valor < 1 || valor > 12) {
            throw new RangeError('La nota debe estar en la escala 1-12.');
        }
        if (typeof peso !== 'number' || peso <= 0) {
            throw new TypeError('El peso debe ser un número mayor que 0.');
        }
        this.note.push({ valor, peso });
    }

    calcularPorcentajes() {
        return this.note.map(n => ({
            valor: n.valor,
            peso: n.peso,
            porcentaje: (n.valor / 12) * 100
        }));
    }

    calcularNotaFinal() {
        if (this.note.length === 0) return { valor: 0, porcentaje: 0 };
        const totalPeso = this.note.reduce((s, n) => s + n.peso, 0);
        const sumaPonderada = this.note.reduce((s, n) => s + n.valor * n.peso, 0);
        const promedio = sumaPonderada / totalPeso;
        return {
            valeu: Number(promedio.toFixed(2)),
            percentage: Number(((promedio / 12) * 100).toFixed(2))
        };
    }

    clearNotes() {
        this.note = [];
    }
}
export default notePorcentaje;