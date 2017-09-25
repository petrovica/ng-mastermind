import { EntityRepository } from './entity-repository.reducer';

export const ENTITY_REPOSITORY_HAS_CHANGED = 'ENTITY_REPOSITORY_HAS_CHANGED';
export const entityRepositoryChangedAction = (entityRepository: EntityRepository) => ({
  type: ENTITY_REPOSITORY_HAS_CHANGED,
  payload: entityRepository
});
