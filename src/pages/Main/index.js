import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, DeleteButton } from './styles';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        error: null,
    };

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = event => {
        this.setState({ newRepo: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true });

        try {
            const { newRepo, repositories } = this.state;

            if (newRepo === '') throw 'Você precisar digitar um repositório';

            const reporExists = repositories.find(
                repository => repository.name === newRepo
            );

            if (reporExists) throw 'Repositório Duplicado';

            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
            });
        } catch {
            this.setState({ error: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleDelete = repository => {
        const { repositories } = this.state;

        this.setState({
            repositories: repositories.filter(r => r !== repository),
        });
    };

    render() {
        const { newRepo, repositories, loading, error } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit} error={error}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositório"
                        onChange={this.handleInputChange}
                        value={newRepo}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaPlus color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <div>
                                <Link
                                    to={`/repository/${encodeURIComponent(
                                        repository.name
                                    )}`}
                                >
                                    Detalhes
                                </Link>
                                <DeleteButton
                                    onClick={() =>
                                        this.handleDelete(repository)
                                    }
                                >
                                    Excluir
                                </DeleteButton>
                            </div>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

export default Main;
