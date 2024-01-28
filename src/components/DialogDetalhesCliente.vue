<template>
    <q-dialog persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">Detalhes</div>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-9">
                        Código: {{ data.id}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Nome: {{ data.nome + " " + data.sobrenome}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Email: {{ data.email}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Telefone: {{ data.telefone}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Endereço: {{ data.endereco.logradouro }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Bairro: {{ data.endereco.bairro }},
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Localidade: {{ data.endereco.localidade }} 
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        Uf: {{ data.endereco.uf }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        CEP: {{ data.endereco.cep }}
                    </div>
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DialogDetalhesCliente',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
});
</script>
