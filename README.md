# 🎯 Desafio: Refatorando o Quiz com Classes

## 📌 Objetivo:
Seu objetivo é reescrever o código do Quiz utilizando **uma classe chamada `Quiz`**, tornando o código mais organizado e modular.

---

## 📌 Requisitos:

### 🏗️ Criar a classe `Quiz`, onde:

- O **`constructor`** deve inicializar:
  - O **array de perguntas** (`quiz`).
  - Os **elementos do DOM** necessários.
  - Os atributos **`points`** e **`currentId`**.

- **Métodos da classe:**
  - `updateQuestion()` → Atualiza a pergunta exibida.
  - `nextQuestion()` → Avança para a próxima pergunta.
  - `checkAnswer(index)` → Verifica se a resposta está correta.
  - `updatePoints(value)` → Atualiza a pontuação.
  - `resetQuiz()` → Reinicia o quiz.

---

## 📌 Eventos e Manipulação do DOM dentro da classe

- A classe deve ser responsável por adicionar os **event listeners** no:
  - **Botão "Próximo"**
  - **Itens de resposta** (`li`)
  
- **Todos os métodos devem acessar e modificar o DOM dentro da classe**.

---

## 📌 Encapsulamento  

- **Manter todas as variáveis e funções dentro da classe** e evitar o uso de variáveis globais.

---

## 💡 Extra (Opcional)  

### 🔥 **Quiz com Temporizador**
- Criar uma **subclasse** (`QuizComTemporizador`) que **herda da classe `Quiz`**.
- Adicionar um **cronômetro** para responder cada questão dentro de um tempo limite.

---
