#!/bin/bash

set -e

echo "🎨 Iniciando frontend de Jobee..."

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}[1/3]${NC} Verificando dependencias..."
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias de npm..."
    npm install
else
    echo -e "${GREEN}✓ Dependencias ya instaladas${NC}"
fi

echo -e "${BLUE}[2/3]${NC} Verificando archivo .env..."
if [ ! -f ".env.local" ] && [ ! -f ".env" ]; then
    echo "Creando .env.local con configuración por defecto..."
    cat > .env.local <<EOF
VITE_API_URL=http://localhost:3000/api
EOF
    echo -e "${GREEN}✓ Archivo .env.local creado${NC}"
else
    echo -e "${GREEN}✓ Archivo .env encontrado${NC}"
fi

echo -e "${BLUE}[3/3]${NC} Iniciando servidor de desarrollo..."
echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Frontend listo en puerto 5173${NC}"
echo -e "${GREEN}  http://localhost:5173${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
npm run dev
