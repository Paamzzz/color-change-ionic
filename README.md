<div align="center">
<h1>📱 color-change-ionic</h1>

> Aplicativo mobile com controle de cores em tempo real, desenvolvido com Ionic + Angular.
</div>
<br>

## 🙋‍♀️ Sobre o projeto

Este app foi desenvolvido como **avaliação formativa (Competência 2)** da faculdade, no curso de **Análise e Desenvolvimento de Sistemas**. A proposta era consumir dados de componentes interativos e aplicar mudanças visuais em tempo real usando boas práticas do Ionic Framework.

O app possui duas telas: uma de identificação pessoal e outra de controle de cores via sliders RGB — onde o usuário manipula os valores e vê as mudanças acontecendo na interface instantaneamente.
<br>

<!-- ## 📸 Telas

<div align="center">
  <img src="src/assets/screenshots/screenshot-home.png" width="250" style="margin-right: 200px">
  <img src="src/assets/screenshots/screenshot-color.png" width="250">
</div> -->

## ✨ Funcionalidades

- Tela de identificação pessoal (Home)
- Tela de controle de cores RGB (Color Change)
- Sliders interativos com `ion-range` para os canais R, G e B
- Botão que aplica a cor selecionada na própria cor do botão
- Botão que altera a cor de fundo da tela usando CSS Custom Properties
- Navegação entre telas com `ion-back-button`
- APK gerado e testado em dispositivo Android físico
<br>

## 🛠️ Tecnologias utilizadas

- [Ionic Framework](https://ionicframework.com/) (v8)
- [Angular](https://angular.io/) (Standalone Components)
- TypeScript
- SCSS
- CSS Custom Properties
- Ionicons
- Android Studio (geração do APK)
- Capacitor
<br>

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/Paamzzz/color-change-ionic.git

# Acesse a pasta
cd color-change-ionic

# Instale as dependências
npm install

# Rode no navegador
ionic serve
```
<br>

### 📦 Para gerar o APK Android

```bash
# Faça o build do projeto
ionic build

# Copie para a plataforma Android
ionic capacitor copy android

# Abra no Android Studio
ionic capacitor open android
```

> No Android Studio: `Build → Build Bundle(s) / APK(s) → Build APK(s)`  
> O APK gerado fica em `app/build/outputs/apk/debug/`
<br>


## 📁 Estrutura de pastas

```
src/
└── app/
    ├── pages/
    │   ├── home/
    │   └── color-change/
    ├── app-routing.module.ts
    └── app.module.ts
```
<br>

## 👩‍💻 Autora

**Pamela Amancio Goulart**  
Estudante de Análise e Desenvolvimento de Sistemas

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pamela-amancio-goulart)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Paamzzz)
