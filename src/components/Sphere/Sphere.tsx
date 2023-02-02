

const Sphere = () => {

    return (
        <group>
            <mesh position={[0, -1, 1]}>
                <sphereGeometry />
                <meshStandardMaterial color="white"/>
            </mesh>
        </group>
    )
}

export default Sphere