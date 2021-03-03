import React from 'react';

import { Container } from './styles';
import Content from '../../components/Content';
import EntregasChart from '../../components/EntregasChart';
import EntregasList from '../../components/EntregasList';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Content>
                <h2> DASHBOARD </h2>
            </Content>
        </Container>
    ) 
}

export default Dashboard;