import { apiFetch } from "./api";
import { updateStoredUser } from "./auth";

function normalizeId(value) {
  return value ?? null;
}

export async function enrichAndStoreUser(rawUser = {}) {
  const normalizedUser = sanitiseUser(rawUser);
  const userId =
    normalizedUser?.id ??
    normalizedUser?.id_user ??
    normalizedUser?.userId ??
    null;

  let resolvedRole = normalizedUser.role ?? null;
  let companyId =
    normalizedUser.companyId ??
    normalizedUser.company_id ??
    normalizedUser.company?.id ??
    normalizedUser.company?.companyId ??
    null;
  let personId =
    normalizedUser.personId ??
    normalizedUser.person_id ??
    normalizedUser.person?.id ??
    null;

  if (userId) {
    if (!companyId) {
      try {
        const response = await apiFetch(`/company/user/${userId}`);
        const companies = Array.isArray(response)
          ? response
          : response?.data
          ? Array.isArray(response.data)
            ? response.data
            : [response.data]
          : [];

        if (companies.length > 0) {
          const company = companies[0];
          companyId = company?.id ?? company?.id_company ?? company?.companyId ?? null;
          resolvedRole = "company";
        } else {
          resolvedRole = resolvedRole || null;
        }
      } catch (error) {
        console.error("No se pudo obtener la empresa del usuario:", error);
      }
    } else {
      resolvedRole = resolvedRole || "company";
    }

    if (!companyId && !personId) {
      try {
        const persons = await apiFetch(`/person/user/${userId}`);
        const person = Array.isArray(persons) ? persons[0] : persons;
        if (person) {
          personId =
            person?.id ??
            person?.id_person ??
            person?.personId ??
            null;
        }
      } catch (error) {
        console.error("No se pudo obtener el perfil de persona:", error);
      }
    }
  }

  const finalRole = resolvedRole || (companyId ? "company" : "user");

  const storedUser = updateStoredUser({
    ...normalizedUser,
    role: finalRole,
    companyId: normalizeId(companyId),
    personId: normalizeId(personId),
  });

  return storedUser;
}

function sanitiseUser(user) {
  if (!user || typeof user !== "object") return {};
  const { password: _password, ...rest } = user;
  return rest;
}
