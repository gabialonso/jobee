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
class NotePercentageCourse extends notePorcentaje {
    // English method to set the course grade (no weights)
    setCourseGrade(value) {
        if (typeof value !== 'number' || Number.isNaN(value)) {
            throw new TypeError('Grade must be a number.');
        }
        if (value < 1 || value > 12) {
            throw new RangeError('Grade must be in the 1-12 scale.');
        }
        this.courseGrade = { value };
    }

    // Spanish alias for compatibility
    establecerNotaCurso(valor) {
        return this.setCourseGrade(valor);
    }

    // Remove the course grade
    removeCourseGrade() {
        delete this.courseGrade;
    }

    // Spanish alias for compatibility
    quitarNotaCurso() {
        return this.removeCourseGrade();
    }

    // Return array of grades (ignoring weights) with percentages
    calculatePercentages() {
        const base = (this.note || []).map(n => ({
            value: n.valor,
            percentage: Number(((n.valor / 12) * 100).toFixed(2))
        }));

        if (this.courseGrade) {
            base.push({
                value: this.courseGrade.value,
                percentage: Number(((this.courseGrade.value / 12) * 100).toFixed(2)),
                course: true
            });
        }

        return base;
    }

    // Spanish alias for compatibility
    calcularPorcentajes() {
        return this.calculatePercentages();
    }

    // Calculate final grade as a simple average (no weights)
    calculateFinalGrade() {
        const values = (this.note || []).map(n => n.valor);
        if (this.courseGrade) values.push(this.courseGrade.value);

        if (values.length === 0) return { value: 0, percentage: 0 };

        const sum = values.reduce((s, v) => s + v, 0);
        const average = sum / values.length;

        return {
            value: Number(average.toFixed(2)),
            percentage: Number(((average / 12) * 100).toFixed(2))
        };
    }

    // Spanish alias for compatibility
    calcularNotaFinal() {
        return this.calculateFinalGrade();
    }

    // Clear notes and course grade
    clearNotes() {
        super.clearNotes();
        delete this.courseGrade;
    }
}

export default NotePercentageCourse;