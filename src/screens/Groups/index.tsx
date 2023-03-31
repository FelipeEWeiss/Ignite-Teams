import { useState } from 'react';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState([]);


  return (
    <Container>
      <Header />
      
      <Highlight
        title="Teams"
        subtitle="Play with your team"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="How about registering first team?" />
        )}
      />
    </Container>
  );
}
