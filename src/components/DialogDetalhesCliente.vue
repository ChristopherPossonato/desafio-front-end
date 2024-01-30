<template>
    <q-dialog persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">Detalhes</div>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Código cliente: 
                        </strong> 
                        {{ data.id}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Nome:
                        </strong>
                        {{ data.nome + " " + data.sobrenome}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                           Email: 
                        </strong>
                        {{ data.email}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Telefone:
                        </strong>
                         {{ data.telefone}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Endereço:
                        </strong> 
                        {{ data.endereco.logradouro }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                       <strong>
                        Bairro: 
                       </strong> 
                       {{ data.endereco.bairro }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Localidade:
                        </strong>
                        {{ data.endereco.localidade }} 
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            Uf:
                        </strong>
                         {{ data.endereco.uf }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <strong>
                            CEP:
                        </strong>
                        {{ data.endereco.cep }}
                    </div>
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn label="OK" color="primary" v-close-popup />
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
