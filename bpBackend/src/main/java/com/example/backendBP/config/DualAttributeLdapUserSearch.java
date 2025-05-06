package com.example.backendBP;

import org.springframework.ldap.core.ContextMapper;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.ldap.search.LdapUserSearch;

import java.util.List;

public class DualAttributeLdapUserSearch implements LdapUserSearch {
    private final String searchBase;
    private final LdapContextSource contextSource;

    public DualAttributeLdapUserSearch(String searchBase, LdapContextSource contextSource) {
        this.searchBase = searchBase;
        this.contextSource = contextSource;
    }

    @Override
    public DirContextOperations searchForUser(String username) {
        LdapTemplate template = new LdapTemplate(contextSource);

        List<DirContextOperations> result = template.search(
                searchBase,
                "(uid=" + username + ")",
                new ContextMapper<DirContextOperations>() {
                    public DirContextOperations mapFromContext(Object ctx) {
                        return (DirContextOperations) ctx;
                    }
                }
        );

        if (!result.isEmpty()) {
            return result.getFirst();
        }

        result = template.search(
                searchBase,
                "(employeeNumber=" + username + ")",
                new ContextMapper<DirContextOperations>() {
                    public DirContextOperations mapFromContext(Object ctx) {
                        return (DirContextOperations) ctx;
                    }
                }
        );

        if (!result.isEmpty()) {
            return result.getFirst();
        }

        throw new UsernameNotFoundException("User not found with uid or employeeNumber: " + username);
    }
}
