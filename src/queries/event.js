import gql from "graphql-tag";

export const getEventsQuery = gql`
  query getEventsQuery {
    allEvents {
      edges {
        node {
          id
          title
          timeStarted
          timeEnded
          eventType: eventTypeByEventTypeId {
            id
            name
          }
          eventPersonnels: eventPersonnelsByEventId {
            edges {
              node {
                personnel: personnelByPersonnelId {
                  id
                  name
                  phone
                }
                role: roleByRoleId {
                  id
                  name
                }
              }
            }
          }
          roles: rolesByEventId {
            edges {
              node {
                id
                name
                availablePersonnels: personnelsByRoleId {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getEventsQueryArgs = {
  props: ({ data }) => {
    return {
      loading: data.loading,
      events: data.allEvents
        ? data.allEvents.edges.map(event => {
            const roleToPersonnelMap = {};
            for (role of event.node.roles.edges) {
              roleToPersonnelMap[role.node.id] = {
                id: role.node.id,
                name: role.node.name,
                availablePersonnels: role.node.availablePersonnels.edges.map(
                  ({ node }) => node
                ),
                personnels: []
              };
            }
            for (eventPersonnel of event.node.eventPersonnels.edges) {
              if (
                roleToPersonnelMap.hasOwnProperty(eventPersonnel.node.role.id)
              ) {
                roleToPersonnelMap[eventPersonnel.node.role.id].personnels.push(
                  eventPersonnel.node.personnel
                );
              }
            }

            return {
              ...event.node,
              rolePersonnels: Object.values(roleToPersonnelMap)
            };
          })
        : null,
      refetch: data.refetch
    };
  }
};
