import React from "react";
import './newLocal.css';
import InputWithLabel from "../../components/inputWithLabel/InputWithLabel";

function NewLocalForm() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="page-header">
                <p>Novo local</p>
            </div>
            <div className="form-container">
                <form>
                    <InputWithLabel
                        title="Nome"
                        type="text"
                        inputClassName="form-group full-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Estado"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Cidade"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                        />
                    <InputWithLabel
                        title="Bairro"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Rua"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Número"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Quantidade de quadras disponíveis"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Horário de funcionamento"
                        type="text"
                        inputClassName="form-group half-width"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <InputWithLabel
                        title="Dias de funcionamento"
                        type="text"
                        inputClassName="form-group half-width"
                        placeholder="Ex: Seg a Sex"
                        // value={local}
                        // onChange={(e) => setLocal(e.target.value)}
                    />
                    <div className="form-group full-width">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewLocalForm;
