#!/bin/bash

# Script para detener el backend y MariaDB

echo "🛑 Deteniendo backend de Jobee..."

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Detener Node.js/nodemon
echo "Deteniendo servidor Node.js..."
pkill -f "node.*app.js" || pkill -f nodemon || echo "No hay procesos de Node corriendo"
echo -e "${GREEN}✓ Servidor detenido${NC}"

# Detener MariaDB
echo "Deteniendo MariaDB..."
sudo killall mariadbd mariadbd-safe 2>/dev/null || echo "MariaDB ya estaba detenido"
echo -e "${GREEN}✓ MariaDB detenido${NC}"

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Todo detenido correctamente${NC}"
echo -e "${GREEN}================================${NC}"
