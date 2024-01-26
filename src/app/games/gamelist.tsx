import { useEffect, useState } from 'react';
import { getAllGames } from '../utils/db';

interface Game {
    id: number;
    title: string;
    thumbnail: string;
    gameurl: string;
    // Add more properties based on the database table structure
}

const GamesTable: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllGames();
                setGames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Game URL</th>
                    {/* Add more columns based on the database table structure */}
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
                        <td>
                            {game.thumbnail && (
                                <img src={game.thumbnail} alt={`Thumbnail for ${game.title}`} />
                            )}
                        </td>
                        <td>
                            {game.gameurl && (
                                <a href={game.gameurl} target="_blank" rel="noopener noreferrer">
                                    {game.gameurl}
                                </a>
                            )}
                        </td>
                        {/* Add more cells based on the database table structure */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GamesTable;