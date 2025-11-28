import { HiXMark } from "react-icons/hi2";

export default function CourseModal({
  show,
  type = 'create', // 'create', 'edit', or 'delete'
  course = null,
  formData,
  onClose,
  onSubmit,
  onDelete,
  onChange
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl border-b-4 border-[#E69C00] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1F2937]">
              {type === 'create' && 'Crear Nuevo Curso'}
              {type === 'edit' && 'Editar Curso'}
              {type === 'delete' && 'Eliminar Curso'}
            </h2>
            <button onClick={onClose} className="p-2 rounded-xl transition">
              <HiXMark className="w-6 h-6 text-[#4B5563]" />
            </button>
          </div>

          {type === 'delete' ? (
            <div>
              <p className="text-[#4B5563] mb-6">
                ¿Estás seguro de que querés eliminar el curso <strong>"{course?.title}"</strong>?
                Esta acción no se puede deshacer.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFF0C2] transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={onDelete}
                  className="px-5 py-2 rounded-xl bg-[#DC2626] border-b-4 border-[#991B1B] text-white font-semibold hover:bg-[#B91C1C] transition"
                >
                  Eliminar Curso
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                  Título del Curso <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => onChange({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => onChange({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B] resize-none"
                  rows="4"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Duración (horas)
                  </label>
                  <input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => onChange({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Precio (USD)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => onChange({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Tema
                  </label>
                  <input
                    type="text"
                    value={formData.theme}
                    onChange={(e) => onChange({ ...formData, theme: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFF0C2] transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#FFD65B] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFC933] transition"
                >
                  {type === 'create' ? 'Crear Curso' : 'Guardar Cambios'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
