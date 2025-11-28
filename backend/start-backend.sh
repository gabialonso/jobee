#!/bin/bash

# Script para levantar el backend de Jobee sin Docker
# Para Fedora Silverblue con Toolbox

set -e  # Detener si hay errores

echo "🚀 Iniciando backend de Jobee..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verificar si MariaDB está corriendo
echo -e "${BLUE}[1/5]${NC} Verificando MariaDB..."
if ! sudo mysql -e "SELECT 1;" &> /dev/null; then
    echo -e "${BLUE}MariaDB no está corriendo. Iniciando...${NC}"

    # Verificar si ya está inicializada
    if [ ! -d "/var/lib/mysql/mysql" ]; then
        echo "Inicializando base de datos MariaDB..."
        sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
    fi

    # Iniciar MariaDB
    sudo /usr/bin/mariadbd-safe --datadir='/var/lib/mysql' &

    # Esperar a que MariaDB esté lista
    echo "Esperando a que MariaDB esté lista..."
    for i in {1..30}; do
        if sudo mysql -e "SELECT 1;" &> /dev/null; then
            echo -e "${GREEN}✓ MariaDB iniciado${NC}"
            break
        fi
        sleep 1
    done
else
    echo -e "${GREEN}✓ MariaDB ya está corriendo${NC}"
fi

# 2. Crear base de datos y usuario si no existe
echo -e "${BLUE}[2/5]${NC} Configurando base de datos..."
sudo mysql <<EOF
CREATE DATABASE IF NOT EXISTS proyecto;
CREATE USER IF NOT EXISTS 'proyectousuario'@'localhost' IDENTIFIED BY 'proyectousuario';
GRANT ALL PRIVILEGES ON proyecto.* TO 'proyectousuario'@'localhost';
GRANT CREATE, DROP ON *.* TO 'proyectousuario'@'localhost';
FLUSH PRIVILEGES;
EOF
echo -e "${GREEN}✓ Base de datos configurada${NC}"

# 3. Instalar dependencias si es necesario
echo -e "${BLUE}[3/5]${NC} Verificando dependencias..."
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias de npm..."
    npm install
else
    echo -e "${GREEN}✓ Dependencias ya instaladas${NC}"
fi

# 4. Sincronizar schema de Prisma
echo -e "${BLUE}[4/5]${NC} Sincronizando schema de Prisma..."
npx prisma db push
echo -e "${GREEN}✓ Base de datos sincronizada${NC}"

# 5. Iniciar el servidor
echo -e "${BLUE}[5/5]${NC} Iniciando servidor..."
echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Backend listo en puerto 3000${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
npm run dev
