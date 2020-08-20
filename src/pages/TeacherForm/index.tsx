import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição">
        </PageHeader>

        <main>
          <fieldset>
            <legend>Seus dados</legend>
            
            <Input name="name" label="Nome Completo"></Input>
            <Input name="avatar" label="Avatar"></Input>
            <Input name="whatsapp" label="WhatsApp"></Input>
            <Textarea name="bio" label="Biografia"></Textarea>
            
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            
            <Input name="subject" label="Matéria"></Input>
            <Input name="cost" label="Custo da sua hora por aula"></Input>
            
          </fieldset>
          <footer>
            <p><img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar Cadastro
            </button>
          </footer>
          
        </main>
    </div>
  )
}

export default TeacherForm
