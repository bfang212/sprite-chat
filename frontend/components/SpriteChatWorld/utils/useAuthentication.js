import { useState, useEffect } from 'react';
import { useSession, useGlobalConfig } from '@airtable/blocks/ui';

function useAuthentication(initialState = false) {
  const {
    currentUser: { id: localUserId },
  } = useSession();
  const globalConfig = useGlobalConfig();
  const activeUsers = globalConfig.get("activeUsers");
  const activeUserNames = globalConfig.get('activeUserNames');
  const [isAuthenticated, setAuthentication] = useState(initialState);
  const hasPermission = globalConfig.hasPermissionToSet();


  useEffect(() => {
    if (hasPermission) {
      if (!activeUsers) {
        globalConfig.setAsync("activeUsers", []);
      }
      if (!activeUserNames) {
        globalConfig.setAsync("activeUserNames", []);
      }
    }
  }, [globalConfig, activeUsers, activeUserNames, hasPermission]);

  useEffect(() => {
    if (activeUsers && hasPermission) {
      const userIndex = activeUsers.indexOf(localUserId);

      if (userIndex === -1) {
        return setAuthentication(false);
      }

      const currentUserInfo = globalConfig.get(localUserId);
      const timeSinceLastSignIn = Date.now() - currentUserInfo.lastSignIn;

      if (timeSinceLastSignIn > 43200000) {
        globalConfig.setAsync("activeUsers",
          [
            ...activeUsers.slice(0, userIndex),
            ...activeUsers.slice(userIndex + 1),
          ],
        );
        globalConfig.setAsync("activeUserNames",
          [
            ...activeUserNames.slice(0, userIndex),
            ...activeUserNames.slice(userIndex + 1),
          ],
        );
        globalConfig.setAsync(localUserId, undefined);
        return setAuthentication(false);
      }

      return setAuthentication(true);
    }
  }, [localUserId, globalConfig, activeUsers, activeUserNames, hasPermission]);

  return [isAuthenticated, setAuthentication, hasPermission];
}

export default useAuthentication;
