<template>
    <v-navigation-drawer app dark permanent>
        <v-list dense nav>
            <v-list-item href="concept">
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-content>concept</v-list-item-content>
            </v-list-item>
            <v-list-item href="airfoil">
                <v-list-item-content>airfoil</v-list-item-content>
            </v-list-item>
            <v-list-item href="aerodynamics">
                <v-list-item-icon>
                    <v-icon>mdi-stacked-line-chart</v-icon>
                </v-list-item-icon>
                <v-list-item-content>aerodynamics</v-list-item-content>
            </v-list-item>
            <v-list-item href="structure">
                <v-list-item-content>structure</v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>