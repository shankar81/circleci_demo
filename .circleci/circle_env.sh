function fetchKeystore {
    sudo gpg --passphrase ${KEYSTORE_ENCRYPTION_KEY} --pinentry-mode loopback -o "android/app/$KEYSTORE_FILE" -d "android/app/$KEYSTORE_FILE.gpg"
}

function copyEnvVarsToGradleProperties {
    DIR="$(pwd)"
    GRADLE_PROPERTIES=${DIR}"/andorid/gradle.properties"
    export GRADLE_PROPERTIES
    echo "Gradle Properties should exist at $GRADLE_PROPERTIES"

    if [[ ! -f "$GRADLE_PROPERTIES" ]]; then
        echo "Gradle Properties does not exist"

        echo "Creating Gradle Properties file..."
        touch $GRADLE_PROPERTIES

        echo "Writing keys to gradle.properties..."
        echo "KEYSTORE_FILE=$KEYSTORE_FILE" >> ${GRADLE_PROPERTIES}
        echo "KEYSTORE_PASSWORD=$KEYSTORE_PASSWORD" >> ${GRADLE_PROPERTIES}
        echo "KEY_ALIAS=$KEY_ALIAS" >> ${GRADLE_PROPERTIES}
        echo "KEY_PASSWORD=$KEY_PASSWORD" >> ${GRADLE_PROPERTIES}
    fi
}