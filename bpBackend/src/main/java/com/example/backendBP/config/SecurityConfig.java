package com.example.backendBP.config;

import com.example.backendBP.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.ldap.authentication.BindAuthenticator;
import org.springframework.security.ldap.authentication.LdapAuthenticationProvider;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final CustomUserDetailsService customUserDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login").permitAll().anyRequest().permitAll());
                        //.anyRequest().authenticated());
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(DaoAuthenticationProvider daoAuthProvider,
                                                       LdapAuthenticationProvider ldapAuthProvider) {
        return new ProviderManager(List.of(daoAuthProvider, ldapAuthProvider));
    }

    @Bean
    public DaoAuthenticationProvider daoAuthProvider(PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(customUserDetailsService);
        provider.setPasswordEncoder(passwordEncoder);
        return provider;
    }

    @Bean
    public LdapAuthenticationProvider ldapAuthProvider() {
        BindAuthenticator authenticator = new BindAuthenticator(ldapContextSource());

        DualAttributeLdapUserSearch userSearch = new DualAttributeLdapUserSearch(
                "ou=users,dc=example,dc=com", ldapContextSource()
        );

        authenticator.setUserSearch(userSearch);
        return new LdapAuthenticationProvider(authenticator);
    }

    @Bean
    public LdapContextSource ldapContextSource() {
        LdapContextSource contextSource = new LdapContextSource();
        contextSource.setUrl("ldap://openldap:389");
        contextSource.setUserDn("cn=admin,dc=example,dc=com");
        contextSource.setPassword("admin");
        return contextSource;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://frontend:3000");
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}

